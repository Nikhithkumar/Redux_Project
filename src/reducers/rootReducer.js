let initialState={
    notes:[]
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_NOTE":
        return {
          notes: [
            ...state.notes,
            {
              title: action.title,
              content: action.content,
            },
          ],
        };
      case "DELETE_NOTE":
        return {
          notes: state.notes.filter((note, index) => {
            return index != action.id;
           } )
        };
        case "EDIT_NOTE":
        return {
          notes: state.notes.map((note, index) =>
            index === action.id ? { ...note, edit: !note.edit } : note
          ),
        };
      case "UPDATE_NOTE":
        return {
          notes: state.notes.map((note, index) => {
            if (index === action.id) {
              return {
                ...note,
                title: action.data.newTitle,
                content: action.data.newMessage,
                edit: !note.edit,
              };
            } else {
              return note;
            }
          })};
      default:
        return state;
    }
  }
  

export default rootReducer