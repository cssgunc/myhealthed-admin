import React from 'react';
import PropTypes from 'prop-types';

import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { Input } from '../../../components';
import ListItem from './ListItem';

import './../../../styles/view-edit.scss';

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 2 * 2,
    margin: `0 0 ${2}px 0`,

    background: isDragging ? "lightgreen" : "transparent",

    ...draggableStyle
});

const getListStyle = () => ({
    background: "transparent",
    padding: 2,
    width: 550
});

class TextDragDrop extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: this.props.text
        }
    }

    reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const items = this.reorder(
            this.state.text,
            result.source.index,
            result.destination.index
        );

        this.props.setText(items);
        this.setState({ "text": items })
    }

    changeHandler = (event) => {
        var newItems = this.state.text;
        newItems[event.target.name] = event.target.value;
        this.setState({ "text": newItems })
        this.props.setText(newItems);
    }

    add = () => {
        this.setState({
            "text": this.state.text.concat([""])
        })
    }
    
    remove = (index) => {
        var newState = this.state.text.filter((_, i) => i !== index);
        this.setState({
            "text": newState
        })
        this.props.setText(newState);
    }

    render() {
        return (
            <div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {this.state.text.map((content, i) => {
                                    return (
                                        <ListItem key={i} delete={() => this.remove(i)}>
                                            <Draggable key={i} draggableId={i + 1} index={i}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}
                                                    >
                                                        <Input
                                                            name={i}
                                                            type="textarea"
                                                            value={this.state.text[i]}
                                                            onChange={this.changeHandler}
                                                            className="drag-input"
                                                        />
                                                    </div>
                                                )}
                                            </Draggable>
                                        </ListItem>
                                    )
                                })}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <button onClick={() => this.add()}>Add</button>
            </div>
        )
    }
}

TextDragDrop.propTypes = {
    text: PropTypes.array.isRequired,
    setText: PropTypes.func.isRequired
}

export default TextDragDrop;