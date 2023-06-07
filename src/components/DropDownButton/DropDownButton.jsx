import { Dropdown } from "react-bootstrap"
import './DropDownButton.css'

function DropDownButton({ title, id, elements, handleDropDownSelect, name }) { //"title", "id" ,["elements"], handleDropDownSelect()
    return (

        <Dropdown
            variant="default"
            title={title}
            key={id}
            id={`dropdown-basic-${id}`}
            name={name}
            onSelect={(event) => {
                handleDropDownSelect(event)
            }}
        >

            <Dropdown.Toggle variant="default">{title}</Dropdown.Toggle>
            <Dropdown.Menu variant="default">
                {elements.map((elm, i) => {
                    return (
                        <Dropdown.Item eventKey={elm} key={i}>{elm}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>

        </Dropdown>
    )
}

export default DropDownButton