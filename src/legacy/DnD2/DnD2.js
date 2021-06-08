import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import cx from 'classnames';
import { applyDrag, generateItems } from '../libs/utils';
import './DnD2.css'
import { guests } from "../guests.json";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const columnNames = ['ห้อง 1-1', 'ห้อง 1-2', 'ห้อง 1-3', 'ห้อง 1-4'];

const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
const pickColor = () => {
    let rand = Math.floor((Math.random() * 10));
    return cardColors[rand];
};

class Cards extends Component {
    constructor() {
        super();

        this.onColumnDrop = this.onColumnDrop.bind(this);
        this.onCardDrop = this.onCardDrop.bind(this);
        this.getCardPayload = this.getCardPayload.bind(this);
        this.printList = this.printList.bind(this);
        let z = 0;
        this.state = {
            scene: {
                type: 'container',
                props: {
                    orientation: 'horizontal'
                },
                children: generateItems(4, (i) => ({
                    id: `column${i}`,
                    type: 'container',
                    name: columnNames[i],
                    props: {
                        orientation: 'vertical',
                        className: 'card-container',
                        maximum: 10
                    },
                    children: generateItems(+(Math.random() * 10).toFixed(), (j) => ({
                        type: 'draggable',
                        id: `${i}${j}`,
                        props: {
                            className: 'card',
                            style: { backgroundColor: cardColors[1] }
                        },
                        data: guests[z++]
                    }))
                }))
            }
        };
    }

    printList() {
        window.print();
    }

    render() {
        return (
            <div className="card-scene">
                    {this.state.scene.children.map((column) => {
                        return (
                                <div className={cx(column.props.className, {
                                    error: column.children.length > column.props.maximum
                                })}>
                                    <div className="card-column-header">
                                        {column.name}
                                        {` (${column.children.length}/${column.props.maximum})`}
                                    </div>
                                    <div className="card-column-content">
                                        <Container {...column.props} groupName="col"
                                            onDrop={e => this.onCardDrop(column.id, e)}
                                            getChildPayload={index => this.getCardPayload(column.id, index)}
                                            dragClass="card-ghost"
                                            dropClass="card-ghost-drop"
                                            onDragEnter={() => { console.log('drag enter:', column.id); }}
                                            onDragLeave={() => { console.log('drag leave:', column.id); }}
                                        >
                                            {column.children.map((card, index) => {
                                                return (
                                                    <Draggable key={card.id}>
                                                        <div {...card.props}>
                                                            <p>
                                                                { index < column.props.maximum && `เตียงที่ ${index+1}: `}
                                                                <span className="guest-name">{`${card.data.name.first[0]} ${card.data.name.last}, ${card.data.name.title}`}</span>
                                                            </p>
                                                        </div>
                                                    </Draggable>
                                                );
                                            })}
                                        </Container>
                                    </div>
                                </div>
                        );
                    })}
                    <div className="no-print">
                    <button onClick={this.printList}>พิมพ์ชื่อแขกวันนี้</button>
                    </div>
            </div>
        );
    }

    getCardPayload(columnId, index) {
        return this.state.scene.children.filter(p => p.id === columnId)[0].children[index];
    }

    onColumnDrop(dropResult) {
        const scene = Object.assign({}, this.state.scene);
        scene.children = applyDrag(scene.children, dropResult);
        this.setState({
            scene
        });
    }

    onCardDrop(columnId, dropResult) {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            const scene = Object.assign({}, this.state.scene);
            const column = scene.children.filter(p => p.id === columnId)[0];
            const columnIndex = scene.children.indexOf(column);

            const newColumn = Object.assign({}, column);
            newColumn.children = applyDrag(newColumn.children, dropResult);
            scene.children.splice(columnIndex, 1, newColumn);

            this.setState({
                scene
            });
        }
    }
}

export default Cards;