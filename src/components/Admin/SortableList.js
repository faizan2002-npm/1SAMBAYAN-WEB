import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import {arrayMoveImmutable} from "array-move";

const SortableList = SortableContainer(({ children }) => {
  return <>{children}</>;
});

const SortableItem = SortableElement(({ children }) => <>{children}</>);

export default (props) => {
  let {
    data = [],
    renderItem,
    keyExtractor = () => "",
    onListSort = () => {},
    axis = "y",
    className = "",
    style = {},
  } = props;

  const onSortEnd = ({ oldIndex, newIndex }) => {
    return arrayMoveImmutable(data, oldIndex, newIndex);
  };

  const onSortStart = ({ node }) => {
    // node.style.backgroundColor = "red";
  };

  return (
    <SortableList
      distance={20}
      onSortStart={onSortStart}
      axis={axis}
      helperClass="border border-primary"
      onSortEnd={(sortData) => {
        const sortedArray = onSortEnd(sortData);
        onListSort(sortedArray);
      }}
    >
      <div className={className} style={style}>
        {data.map((item, index) => {
          return (
            <SortableItem key={keyExtractor(item, index)} index={index}>
              {renderItem(item, index)}
            </SortableItem>
          );
        })}
      </div>
    </SortableList>
  );
};