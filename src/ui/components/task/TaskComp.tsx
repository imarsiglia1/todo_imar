import { useMemo, useState, memo, useEffect } from "react";
import { TaskType } from "../../../domain/api/entities/general.entities";
import { TbEdit, TbTrash } from "react-icons/tb";
import CustomCheckbox from "../input/CustomCheckbox";
import { getTaskColor } from "../utils/general";

interface TaskProps {
  item: TaskType;
  onInitRemove: (item?: TaskType) => void;
  onInitEdit: (item?: TaskType) => void;
  onToggle: (item?: TaskType) => void;
  index: number;
}

const TaskComp = ({
  item,
  onInitRemove,
  onInitEdit,
  onToggle,
  index,
}: TaskProps) => {
  const [checked, setChecked] = useState(item.isChecked);

  useEffect(() => {
    setChecked(item.isChecked);
  }, [item]);

  const onPreToggle = () => {
    item.isChecked = !checked;
    setChecked(!checked);
    onToggle(item);
  };

  const color = useMemo(() => {
    return getTaskColor(index);
  }, [index]);

  return (
    <div className="card_task" style={{ backgroundColor: color.color }}>
      <div className="card_container">
        <div>
          <div className="row_space_between">
            <label className="card_title">{item.title}</label>
            <div className="checkbox">
              <CustomCheckbox onPress={onPreToggle} checked={checked} />
            </div>
          </div>
          <div className="card_content">{item.description}</div>
        </div>

        <div className="row_actions">
          <a className="pressable" onClick={() => onInitEdit(item)}>
            <TbEdit className="action_icon primary_color" />
          </a>
          <a className="pressable" onClick={() => onInitRemove(item)}>
            <TbTrash className="action_icon error_color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskComp);
