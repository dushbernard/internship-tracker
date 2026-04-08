import {useState} from 'react';
import '../styles/AddTask.css';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('pending');

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            status
        };

        try{
            const res = await fetch("http://localhost:5000/api/tasks",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            });

            const data = await res.json();
            console.log(data);

            alert("Task Added successfully!");

            setTitle('');
            setDescription('');
            setDate('');
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="addtask-container">
            <div className='addtask-card'>
                            <h2>Add Internship Activity</h2>

            <form onSubmit={handleSubmit}>

                <input type="text"
                 placeholder='Task Title'
                 value={title}
                 onChange = {(e) => setTitle(e.target.value)} required/>

                <textarea
                 placeholder='Task Description'
                 value={description}
                 onChange = {(e) => setDescription(e.target.value)} required></textarea>

                 <input type="date"
                  value={date}
                  onChange = {(e) => setDate(e.target.value)} required/>

                  <select value={status} onChange = {(e) => setStatus(e.target.value)} required>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>

                  <button type="submit">Add Activity</button>
            </form>
            </div>
        </div>
    );
};

export default AddTask;