import React, { Component } from "react";
import { CtaButton } from "./CtaButton";
import { CgRadioCheck } from "react-icons/cg";
import { BsCheckCircle } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import NewTaskModal from "./NewTaskModal";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditModalOpen: false,
      isMenuOpen: false,
    };
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleEditModal() {
    this.setState((pState) => ({ isEditModalOpen: !pState.isEditModalOpen }));
  }
  toggleMobileMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }
  handleEditFormSubmit(update) {
    this.props.onUpdate(this.props.id, update);
  }

  render() {
    const {
      time,
      title,
      id,
      onCompleteToggle,
      onFavoriteToggle,
      isComplete,
      isFavorite,
      onDelete,
    } = this.props;
    return (
      <div className="task-item">
        <div className="task-details">
          <span className="task-time">{time}</span>
          {isComplete ? (
            <h3
              className="task-title"
              style={{
                textDecoration: "line-through",
              }}
            >
              {title}
            </h3>
          ) : (
            <h3 className="task-title" style={{ textDecoration: "none" }}>
              {title}
            </h3>
          )}
        </div>
        <div
          className="task-cta-container"
          style={{
            height: this.state.isMenuOpen ? "250px" : "",
            transition: "0.5s",
          }}
        >
          <CtaButton
            type={"button"}
            className={"cta-button"}
            handleClick={() => onCompleteToggle(id)}
          >
            {isComplete ? (
              <BsCheckCircle size={"1em"} color={"#82c5e9"} title={"Done"} />
            ) : (
              <CgRadioCheck size={"1em"} title={"Done?"} />
            )}
          </CtaButton>
          <CtaButton
            type={"button"}
            className={"cta-button"}
            handleClick={this.toggleMobileMenu}
          >
            <VscChevronDown size={"1em"} />
          </CtaButton>
          <CtaButton
            type={"button"}
            className={"cta-button"}
            handleClick={() => onFavoriteToggle(id)}
          >
            {isFavorite ? (
              <BsHeartFill color={"red"} title={"Favorited"} />
            ) : (
              <BsHeart title={"Favorite?"} />
            )}
          </CtaButton>
          <CtaButton
            type={"button"}
            className={"cta-button"}
            handleClick={() => onDelete(id)}
          >
            <RiDeleteBinLine title={"Delete Task"} color={"red"} />
          </CtaButton>
          <CtaButton
            type={"button"}
            className={"cta-button"}
            title={"Edit Task"}
            handleClick={this.toggleEditModal}
          >
            <FiEdit title={"Edit Task"} />
          </CtaButton>
        </div>
        <NewTaskModal
          defaultTitle={title}
          defaultDeadline={time}
          modalIsVisible={this.state.isEditModalOpen}
          hideModal={this.toggleEditModal}
          onSubmit={this.handleEditFormSubmit}
        />
      </div>
    );
  }
}

export default TaskItem;
