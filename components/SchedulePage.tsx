import { scheduleData } from '../constants';

const SchedulePage = () => {
    return (
        <div className="bg-white">
            <header className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Class Schedule</h1>
                        <p className="text-lg text-gray-600">
                            Find the perfect class for you. We offer a range of classes for all ages and skill levels throughout the week.
                        </p>
                    </div>
                </div>
            </header>
            
            <main className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="overflow-x-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 min-w-[1000px]">
                            {scheduleData.map(day => (
                                <div key={day.day} className="bg-white rounded-lg p-4">
                                    <h3 className="text-xl font-bold text-center mb-6 pb-3 border-b-2 border-amber-800">{day.day}</h3>
                                    <div className="space-y-4">
                                        {day.classes.map((classItem, index) => (
                                            <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-200">
                                                <p className="text-sm font-semibold text-gray-500">{classItem.time}</p>
                                                <p className="font-bold text-gray-900 mt-1">{classItem.name}</p>
                                                <p className="text-sm text-gray-600">{classItem.instructor}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                   </div>
                </div>
            </main>
        </div>
    );
};

export default SchedulePage;