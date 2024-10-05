"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const loveLetterTemplates = [
    "My dearest {name}, every moment I spend with you is a gift. You are the sunshine that brightens up my day and the stars that light up my night. I love you more than words can express.",
    "To my beloved {name}, you are the missing piece I never knew I needed. You make my heart skip a beat and my soul feel alive. I cherish every moment we share together.",
    "My love {name}, you are the reason I wake up with a smile on my face every day. Your touch ignites a fire within me, and your love is my guiding light. I adore you.",
    "My sweet {name}, you are the melody that fills my heart with joy. You are the rhythm that makes me whole. I love you more with each passing day.",
    "To the love of my life {name}, you are my forever home. You are my safe haven, my partner, and my best friend. I love you now and forever.",
    "My dearest {name}, as I sit here thinking of you, my heart overflows with gratitude for your love and presence in my life. Every moment with you is a treasure that I will hold close forever.",
    "Dearest {name}, your love is like a beacon guiding me through life. I am constantly in awe of your strength, your kindness, and the way you care for those around you. You inspire me to be better, to love deeper, and to live fully."
];

const extraLines = [
    "Every day I spend with you feels like a beautiful dream I never want to wake from.",
    "I cannot imagine a future without you by my side. You are my everything.",
    "I promise to stand by your side through thick and thin, to love and support you always.",
    "I am so incredibly lucky to have you in my life. You make everything brighter.",
    "With you, I've discovered what true love feels like, and I never want to let go."
];

const adjectives = ["beautiful", "gorgeous", "stunning", "amazing", "lovely", "sweet", "caring", "thoughtful", "kind", "generous"];
const nouns = ["eyes", "smile", "laugh", "touch", "voice", "heart", "soul", "spirit"];

function generateLoveLetter(name: string) {
    const template = loveLetterTemplates[Math.floor(Math.random() * loveLetterTemplates.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const extraLine = extraLines[Math.floor(Math.random() * extraLines.length)];

    // Generate the letter combining different parts
    const loveLetter = `
        ${template.replace("{name}", name)}
        Your ${adjective} ${noun} is what I adore the most about you.
        ${extraLine}
    `;

    return loveLetter.trim(); // Remove any extra whitespace
}

export default function LoveLetterGenerator() {
    const [name, setName] = useState("");
    const [loveLetter, setLoveLetter] = useState("");

    const handleGenerate = () => {
        setLoveLetter(generateLoveLetter(name));
    };

    return (
        <div className="max-w-md mx-auto p-4 space-y-4">
            <h1 className="text-3xl font-bold">Love Letter Generator</h1>
            <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Your loved one&apos;s name:</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <Button onClick={handleGenerate}>Generate Love Letter</Button>
            <Textarea value={loveLetter} className="h-56" readOnly={true} />
        </div>
    );
}
