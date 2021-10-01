import "./BoxForm.css"

const BoxForm = ({handleSubmit, onChange, formData}) => (
    <form className="BoxForm" onSubmit={handleSubmit}>
        <label htmlFor="height">Height:</label>
        <input 
            id="height" 
            className="BoxForm-input"
            name="height" 
            type="number" 
            onChange={onChange} 
            value={formData.height}
        />

        <label htmlFor="width">Width:</label>
        <input 
            id="width" 
            className="BoxForm-input"
            name="width" 
            type="number" 
            onChange={onChange}
            value={formData.width}
        />

        <label htmlFor="color">Color:</label>
        <input 
            id="color" 
            className="BoxForm-input"
            name="color" 
            type="text"
            onChange={onChange}
            value={formData.color}
        />
        <br/>
        <button className="BoxForm-btn">Add Box</button>
    </form>
)

export default BoxForm;