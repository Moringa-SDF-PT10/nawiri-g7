import { useState, useEffect } from 'react';
import { getUsers } from '../../api/usersApi';

const ActivityLog = () => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const users = await getUsers();
                const recentActivities = users
                    .sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin))
                    .slice(0, 5)
                    .map(user => ({
                        id: user.id,
                        name: user.name,
                        action: 'Logged in',
                        time: new Date(user.lastLogin).toLocaleString()
                    }));

                setActivities(recentActivities);
            } catch (error) {
                console.error('Error fetching activities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    if (loading) {
        return <div className="text-center py-4">Loading activities...</div>;
    }

    return (
        <div className="space-y-3">
            {activities.map(activity => (
                <div key={activity.id} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">{activity.name.charAt(0)}</span>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                        <p className="text-sm text-gray-500">
                            {activity.action} at {activity.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityLog;