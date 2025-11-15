// src/pages/StaticContent.jsx
import ContentSection from '../components/sections/ContentSection';
import { confidentialData, costSavingsData, whyChooseData, locationsData } from '../data/content';

export const Confidential = () => (
    <ContentSection layout="single" backgroundImage={confidentialData.bg}>
        <h1>{confidentialData.title}</h1>
        <img src={confidentialData.logo} alt="Logo" />
    </ContentSection>
);

export const CostSavings = () => (
    <ContentSection layout="two-column" backgroundVideo={costSavingsData.bg}>
        <div>{costSavingsData.growth}</div>
        <div>{costSavingsData.costs}</div>
    </ContentSection>
);

export const WhyChooseUs = () => (
    <ContentSection layout="grid" backgroundImage={whyChooseData.bg}>
        <h2>{whyChooseData.title}</h2>
        <div className="grid grid-cols-2 gap-8">
            {whyChooseData.reasons.map(reason => (
                <ReasonCard key={reason.id} {...reason} />
            ))}
        </div>
    </ContentSection>
);

export const ExpandGlobal = () => (
    <ContentSection layout="grid" backgroundVideo={locationsData.bg}>
        <h1>{locationsData.title}</h1>
        <div className="grid grid-cols-3 gap-8">
            {locationsData.locations.map(loc => (
                <LocationCard key={loc.title} {...loc} />
            ))}
        </div>
    </ContentSection>
);