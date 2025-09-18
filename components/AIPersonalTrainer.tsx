import { useState, FormEvent } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import type { StudentProfile } from '../types';

type TrainingPlan = {
    planTitle: string;
    sections: {
        title: string;
        drills: string[];
    }[];
    motivationalTip: string;
};

const AIPersonalTrainer = ({ studentProfile }: { studentProfile: StudentProfile }) => {
    const [goal, setGoal] = useState('');
    const [plan, setPlan] = useState<TrainingPlan | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            planTitle: { type: Type.STRING, description: 'A catchy title for the training plan.' },
            sections: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING, description: 'The title of the training section (e.g., Warm-up, Kihon Drills).' },
                        drills: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: 'A list of specific drills or exercises for this section.'
                        }
                    },
                    required: ['title', 'drills']
                }
            },
            motivationalTip: { type: Type.STRING, description: 'A short, motivational tip to encourage the student.' },
        },
        required: ['planTitle', 'sections', 'motivationalTip']
    };


    const handleGeneratePlan = async (e: FormEvent) => {
        e.preventDefault();
        if (!goal.trim() || !process.env.API_KEY) {
            setError("Please enter a goal and ensure the API key is configured.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setPlan(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const model = 'gemini-2.5-flash';
            const systemInstruction = "You are 'Sensei AI', an expert Goju-Ryu Karate instructor. Your role is to create personalized, encouraging, and safe training plans for students. Based on the user's rank and goals, provide a structured training plan in the specified JSON format. The plan should include sections like 'Warm-up', 'Kihon (Basics)', 'Kata Practice', and 'Cool-down'. Each section should have a list of specific, actionable drills or exercises. Keep the tone supportive and motivational.";
            const contents = `My current rank is ${studentProfile.currentRank.name} (${studentProfile.currentRank.kyu}). My goal is: "${goal}"`;

            const response = await ai.models.generateContent({
                model,
                contents,
                config: {
                    systemInstruction,
                    responseMimeType: 'application/json',
                    responseSchema,
                }
            });

            const planData = JSON.parse(response.text);
            setPlan(planData);
        } catch (err) {
            console.error("Error generating training plan:", err);
            setError("Sorry, I couldn't create a plan right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleReset = () => {
        setPlan(null);
        setGoal('');
        setError(null);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
                 <div className="p-2 bg-amber-100 rounded-full mr-3">
                    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">AI Personal Trainer</h2>
            </div>
            
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            {!plan && (
                <form onSubmit={handleGeneratePlan}>
                    <label htmlFor="training-goal" className="block text-sm font-medium text-gray-700 mb-2">
                        What do you want to work on today?
                    </label>
                    <textarea
                        id="training-goal"
                        rows={3}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700 transition-shadow"
                        placeholder={`e.g., "Improve my stances" or "Prepare for my ${studentProfile.nextRank.name} grading"`}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !goal.trim()}
                        className="mt-4 w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating Plan...
                            </>
                        ) : 'Generate Plan'}
                    </button>
                </form>
            )}

            {plan && (
                <div className="animate-fade-in">
                    <h3 className="text-2xl font-bold text-amber-800 mb-4">{plan.planTitle}</h3>
                    <div className="space-y-4">
                        {plan.sections.map((section, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-md">
                                <h4 className="font-bold text-gray-800">{section.title}</h4>
                                <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                                    {section.drills.map((drill, drillIndex) => (
                                        <li key={drillIndex}>{drill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <blockquote className="mt-6 border-l-4 border-amber-700 pl-4 italic text-gray-700">
                        {plan.motivationalTip}
                    </blockquote>
                     <button
                        onClick={handleReset}
                        className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700"
                    >
                        Create a New Plan
                    </button>
                </div>
            )}
        </div>
    );
};

export default AIPersonalTrainer;