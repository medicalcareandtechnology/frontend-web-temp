import React from 'react';
import ModelViewer from '../components/ModelViewer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ModelPage = () => {
    return (
        <div className="w-full h-screen bg-gray-100 relative">
            <div className="absolute top-6 left-6 z-10">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all text-gray-800 font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <ModelViewer />
            </div>
        </div>
    );
};

export default ModelPage;
