import { useState } from 'react';
import { bookingScheduleData } from '../constants';
import type { BookingClass } from '../types';

const ClassCard = ({ classInfo, onBook }: { classInfo: BookingClass, onBook: (classInfo: BookingClass) => void }) => {
    const isFull = classInfo.spotsAvailable === 0;
    const availabilityColor = classInfo.spotsAvailable > 5 ? 'text-green-600' : classInfo.spotsAvailable > 0 ? 'text-yellow-600' : 'text-red-600';

    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
            <h4 className="font-bold text-gray-900">{classInfo.name}</h4>
            <p className="text-sm text-gray-500">{classInfo.time}</p>
            <p className="text-sm text-gray-500">with {classInfo.instructor}</p>
            <div className="flex-grow my-4">
                <p className={`text-sm font-semibold ${availabilityColor}`}>
                    {isFull ? 'Class Full' : `${classInfo.spotsAvailable} / ${classInfo.spotsTotal} spots left`}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                        className={`h-1.5 rounded-full ${classInfo.spotsAvailable > 5 ? 'bg-green-500' : classInfo.spotsAvailable > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${(classInfo.spotsAvailable / classInfo.spotsTotal) * 100}%` }}
                    ></div>
                </div>
            </div>
            <button
                onClick={() => onBook(classInfo)}
                disabled={isFull}
                className="w-full mt-auto px-4 py-2 text-sm font-semibold rounded-md transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed bg-gray-800 text-white hover:bg-black"
            >
                {isFull ? 'Full' : 'Book Now'}
            </button>
        </div>
    );
};

const BookingPage = () => {
    const [schedule, setSchedule] = useState<BookingClass[]>(bookingScheduleData);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleBookClass = (bookedClass: BookingClass) => {
        setSchedule(prevSchedule =>
            prevSchedule.map(cls =>
                cls.id === bookedClass.id && cls.spotsAvailable > 0
                    ? { ...cls, spotsAvailable: cls.spotsAvailable - 1 }
                    : cls
            )
        );
        alert(`You have successfully booked the ${bookedClass.name} class on ${bookedClass.day} at ${bookedClass.time}.`);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Book Your Class</h1>
                    <p className="text-gray-600 mt-1">View the weekly schedule and reserve your spot.</p>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 min-w-[1200px]">
                        {daysOfWeek.map(day => (
                            <div key={day}>
                                <h3 className="text-xl font-bold text-center mb-6 pb-3 border-b-2 border-amber-800">{day}</h3>
                                <div className="space-y-4">
                                    {schedule
                                        .filter(cls => cls.day === day)
                                        .map(classInfo => (
                                            <ClassCard key={classInfo.id} classInfo={classInfo} onBook={handleBookClass} />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookingPage;