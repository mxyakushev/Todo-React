export default function InputField({text, handleChange, handleSubmit}){
    return (
        <div>
            <label>
                <input type="text" value={text} onChange={(e) => handleChange(e.target.value)}/>
            </label>
            <button onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}
