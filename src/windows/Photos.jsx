
import React from 'react';
import { photosLinks, gallery } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import WindowControls from '#components/WindowControls';
import useWindowStore from "#store/window.js";
import { clsx } from 'clsx';

const Photos = () => {
    const { openWindow } = useWindowStore();
    return (
        <div className='flex flex-col h-full bg-white rounded-lg shadow-xl overflow-hidden'>
            {/* Header */}
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 select-none">
                <div className="flex items-center ">
                    <WindowControls target="photos" />
                    <span className="font-medium text-gray-600 ml-4 text-sm">Photos</span>
                </div>
            </div>

            <div className='flex h-full overflow-hidden'>
                {/* Sidebar */}
                <div className='w-48 bg-gray-50 border-r border-gray-200 p-4 pt-6 flex-shrink-0 hidden md:block'>
                    <div className='space-y-6'>
                        <div>
                            <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2'>Library</h3>
                            <ul className='space-y-1'>
                                {photosLinks.map((link) => (
                                    <li key={link.id} className={clsx('flex items-center gap-3 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-200 cursor-pointer', link.id === 1 && "bg-gray-200 font-medium")}>
                                        <img src={link.icon} alt={link.title} className='w-4 h-4 opacity-70' />
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2'>Albums</h3>
                            <div className="px-2 text-sm text-gray-500">
                                Shared Albums
                            </div>
                        </div>

                    </div>
                </div>

                {/* Main Content (Gallery) */}
                <div className='flex-1 overflow-y-auto p-6 bg-white'>
                    <div className='mb-6 flex justify-between items-end'>
                        <h2 className='text-2xl font-bold text-gray-800'>Library</h2>
                        <span className="text-sm text-gray-500">{gallery.length} Photos</span>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {gallery.map((photo) => (
                            <div
                                key={photo.id}
                                className='aspect-square rounded-lg overflow-hidden relative group cursor-pointer shadow-sm border border-gray-100'
                                onClick={() => openWindow("imgfile", { imageUrl: photo.img, name: `Photo ${photo.id}` })}
                            >
                                <img
                                    src={photo.img}
                                    alt={`Gallery item ${photo.id}`}
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PhotosWindow = WindowWrapper(Photos, 'photos');
export default PhotosWindow;