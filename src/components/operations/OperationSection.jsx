import Button from "../ui/Button";

const OperationSection = ({ onAddOrEdit, onDelete, isEditing }) => {
    return (
        <div>
          <Button text={isEditing ? "Save" : "Create"} onClick={onAddOrEdit} />
          <Button text="Delete All" onClick={onDelete} />
        </div>
      );
};

export default OperationSection;