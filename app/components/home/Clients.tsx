'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {

    const clients = [
        {
            name: 'Envato',
            image: '/clients/envato.png'
        },
        {
            name: 'Blink',
            image: '/clients/blink.png'
        },
        {
            name: 'Around Home',
            image: '/clients/aroundhome.png'
        },
        {
            name: 'Kilo Health',
            image: '/clients/kilo-health.png'   
        },
        {
            name: 'PlayVS',
            image: '/clients/playvs.png'
        },
        {
            name: 'Abnormal',
            image: '/clients/abnormal.png'
        },
        {   
            name: 'Intuit',
            image: '/clients/intuit.png'
        },
        {
            name: 'Love From Yours',
            image: '/clients/love-from-yours.png'
        },
        {
            name: 'Guidewire',
            image: '/clients/guidewire.png'
        },
        {
            name: 'Scale',
            image: '/clients/scale.png'
        },
        {
            name: 'Orderful',
            image: '/clients/orderful.png'
        }
    ]

    const ClientLogo = ({ client, index }: { client: { name: string; image: string }, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: 'easeOut',
            }}
        >
            <motion.div
                animate={{
                    y: [0, -4, 0],
                    rotate: [0, 1, 0, -1, 0]
                }}
                transition={{
                    duration: 4 + Math.random() * 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                }}
                className="relative w-36 h-20 sm:w-44 sm:h-24 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-4"
            >
                <img
                    src={client.image}
                    alt={`${client.name} logo`}
                    className="object-contain p-2 sm:p-3 filter grayscale"
                />
            </motion.div>
        </motion.div>
    );

    return (
        <section className="w-full px-4 py-12">
            <div className="flex flex-col items-center gap-0">
                <div className="flex flex-wrap justify-center items-center gap-0">
                    {clients.slice(0, 4).map((client, index) => (
                        <ClientLogo key={client.name} client={client} index={index} />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center items-center gap-0">
                    {clients.slice(4, 9).map((client, index) => (
                        <ClientLogo key={client.name} client={client} index={index + 4} />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center items-center gap-0">
                    {clients.slice(9, 11).map((client, index) => (
                        <ClientLogo key={client.name} client={client} index={index + 9} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients