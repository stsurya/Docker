import React, { useState, useEffect } from 'react';

function App() {
  const [records, setRecords] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Fetch all records
  const fetchRecords = () => {
    fetch('http://localhost:5000/api/records') // ✅ already correct
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // Create new record
  const addRecord = async () => {
    if (!title) return alert('Title is required');
    const newRecord = { title, description };
    try {
      const res = await fetch('http://localhost:5000/api/records', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newRecord),
});
      if (res.ok) {
        await res.json();
        setTitle('');
        setDescription('');
        fetchRecords();
      } else {
        const err = await res.json();
        alert(err.message || 'Failed to add record');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  // Delete record
  const deleteRecord = async (id) => {
    if (!window.confirm('Are you sure to delete this record?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/records/${id}`, {
  method: 'DELETE',
});
      if (res.ok) {
        fetchRecords();
      } else {
        alert('Failed to delete');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  // Start editing record
  const startEdit = (record) => {
    setEditingId(record._id);
    setEditTitle(record.title);
    setEditDescription(record.description);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditDescription('');
  };

  // Save edited record
  const saveEdit = async (id) => {
    if (!editTitle) return alert('Title is required');
    try {
      const res = await fetch(`http://localhost:5000/api/records/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: editTitle, description: editDescription }),
});
      if (res.ok) {
        cancelEdit();
        fetchRecords();
      } else {
        alert('Failed to update');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Records</h2>
      <ul>
        {records.map(record => (
          <li key={record._id} style={{ marginBottom: '10px' }}>
            {editingId === record._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <button onClick={() => saveEdit(record._id)}>Save</button>
                <button onClick={cancelEdit} style={{ marginLeft: '5px' }}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{record.title}</strong>: {record.description}
                <button onClick={() => startEdit(record)} style={{ marginLeft: '10px' }}>Edit</button>
                <button onClick={() => deleteRecord(record._id)} style={{ marginLeft: '5px' }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <h3>Add New Record</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addRecord}>Add</button>
    </div>
  );
}

export default App;