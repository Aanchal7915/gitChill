import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in leaflet with React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

interface MapPickerProps {
    onLocationSelect: (lat: number, lng: number, address: string) => void;
    initialLocation?: [number, number];
}

const MapEvents = ({ onSelect }: { onSelect: (lat: number, lng: number) => void }) => {
    useMapEvents({
        click(e) {
            onSelect(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
};

const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
};

const MapPicker: React.FC<MapPickerProps> = ({ onLocationSelect, initialLocation }) => {
    const [position, setPosition] = useState<[number, number]>(initialLocation || [28.6139, 77.2090]); // Default to Delhi
    const [address, setAddress] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);

    const fetchAddress = async (lat: number, lng: number) => {
        try {
            const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            const data = await resp.json();
            const addr = data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            setAddress(addr);
            onLocationSelect(lat, lng, addr);
        } catch (error) {
            console.error("Geocoding failed", error);
        }
    };

    const handleMapClick = (lat: number, lng: number) => {
        setPosition([lat, lng]);
        fetchAddress(lat, lng);
    };

    const handleGetCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
                fetchAddress(latitude, longitude);
            });
        }
    };

    return (
        <div className="space-y-2">
            {/* Compact Trigger Button */}
            <div
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all group"
            >
                <div className="flex flex-col text-left pr-2">
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">
                        {address ? 'Service Location Pinned' : 'Location Not Set'}
                    </span>
                    <span className="text-sm text-gray-700 font-semibold leading-snug">
                        {address || 'Tap to select location on Map'}
                    </span>
                </div>

                <div className="bg-blue-600 p-2 rounded-lg text-white group-hover:scale-110 transition-transform shadow-md">
                    <MapPin size={18} />
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
                    <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl animate-scaleIn border border-white/20">
                        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Select Location</h3>
                                <p className="text-xs text-gray-500 font-medium">Please pin your service address</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-800 p-3 hover:bg-gray-200 rounded-full transition-all"
                            >
                                <span className="text-3xl leading-none">&times;</span>
                            </button>
                        </div>

                        <div className="h-80 w-full relative">
                            <MapContainer
                                center={position}
                                zoom={14}
                                style={{ height: '100%', width: '100%' }}
                                zoomControl={false}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} />
                                <MapEvents onSelect={handleMapClick} />
                                <ChangeView center={position} />
                            </MapContainer>

                            <div className="absolute bottom-6 right-6 z-[1000]">
                                <button
                                    type="button"
                                    onClick={handleGetCurrentLocation}
                                    className="bg-white text-blue-600 p-4 rounded-2xl shadow-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2 border border-blue-100 active:scale-95"
                                    title="Use My Current Location"
                                >
                                    <MapPin size={22} />
                                    <span className="text-sm">Locate Me</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-8 bg-white space-y-5">
                            <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col gap-1">
                                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Final Address:</span>
                                <p className="text-sm text-gray-700 font-medium italic min-h-[2.5rem] line-clamp-2">
                                    {address || "Click anywhere on the map above to select your location..."}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 transform hover:-translate-y-1 active:translate-y-0"
                            >
                                Confirm This Location
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapPicker;
