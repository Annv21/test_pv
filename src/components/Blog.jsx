import React from 'react';
import Icon1 from '../Icon/ChildThemeIncluded';
import Icon2 from '../Icon/ContactForm';
import Icon3 from '../Icon/ContentBlocks';
import Icon4 from '../Icon/EnhancedPageBuilder';
import Icon5 from '../Icon/LiveCustomizer';
import Icon6 from '../Icon/LifetimeFreeUpdates';
import Icon7 from '../Icon/One-ClickDemoInstall';
import Icon8 from '../Icon/PowerEliteSupport';
import Icon9 from '../Icon/SliderRevolution';
import Icon10 from '../Icon/TranslatableReady';
import Icon11 from '../Icon/IconTB';
import Icon12 from '../Icon/IconMayAnh';

function Blog() {
    const features = [
        {
            icon: <Icon4 />,
            title: 'Enhanced Page Builder',
            description: 'A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.',
        },
        {
            icon: <Icon9 />,
            title: 'Slider Revolution',
            description: 'Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.',
        },
        {
            icon: <Icon5 />,
            title: 'Live Customizer',
            description: 'No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.',
        },
        {
            icon: <Icon7 />,
            title: 'One-Click Demo Install',
            description: 'Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.',
        },
        {
            icon: <Icon8 />,
            title: 'Power Elite Support',
            description: 'Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.',
        },
        {
            icon: <Icon6 />,
            title: 'Lifetime Free Updates',
            description: 'With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.',
        },
        {
            icon: <Icon10 />,
            title: 'Translatable Ready',
            description: 'Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.',
        },
        {
            icon: <Icon1 />,
            title: 'Child Theme Included',
            description: 'Herion comes packed with a ready-to-use child theme template in case you want to re-brand the theme for you or your client or if you want to add your own customization.',
        },
        {
            icon: <Icon3 />,
            title: 'Content Blocks',
            description: 'Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.',
        },
        {
            icon: <Icon11 />,
            title: 'Social Media Integration',
            description: 'Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...',
        },
        {
            icon: <Icon12 />,
            title: 'Photos Included',
            description: 'Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.',
        },
        {
            icon: <Icon2 />,
            title: 'Contact Form 7',
            description: 'Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.',
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6">
                            <div className="text-4xl mb-4 text-red-500">{feature.icon}</div>
                            <div className="text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;