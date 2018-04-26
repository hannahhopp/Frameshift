// ACTION TYPES
const GOT_DREAMS = 'GOT_DREAMS';
const ADDED_DREAM = 'ADDED_DREAM';
const EDITED_DREAM = 'EDITED_DREAM';
const REMOVED_DREAM = 'REMOVED_DREAM';

// INITIAL STATE
const dreams = [];

// ACTION CREATORS
export const gotDreams = dreams => ({
  type: GOT_DREAMS,
  dreams
});

export const addedDream = dream => ({
  type: ADDED_DREAM,
  dream
});

export const editedDream = dream => ({
  type: EDITED_DREAM,
  dream
});

export const removedDream = dream => ({
  type: REMOVED_DREAM,
  dream
});

// THUNK CREATORS
export const fetchDreams = () => {
  return (dispatch, _, { axios }) => {
    axios.get('/api/dreams')
      .then(res => res.data)
      .then(dreams => dispatch(gotDreams(dreams)))
      .catch(console.error.bind(console));
  }
}

export const addDream = (dream) => {
  return (dispatch, _, { axios, history }) => {
    axios.post('/api/dreams', dream)
      .then(res => res.data)
      .then(dream => {
        dispatch(addedDream(dream));
        history.push(`/dreams/${dream.id}`);
      })
      .catch(console.error.bind(console));
  }
}

export const editDream = (dream) => {
  return (dispatch, _, { axios, history }) => {
    axios.put(`/api/dreams/${dream.id}`, dream)
      .then(res => res.data)
      .then(dream => {
        dispatch(editedDream(dream));
        history.push(`/dreams/${dream.id}`);
      })
      .catch(console.error.bind(console));
  }
}

export const removeDream = (dream) => {
  return (dispatch, _, { axios, history }) => {
    axios.delete(`/api/dreams/${dream.id}`)
      .then(() => {
        dispatch(removedDream(dream));
        history.push('/dreams');
      })
      .catch(console.error.bind(console));
  }
}

export default (state = dreams, action) => {
  const { dream } = action;
  const i = state.indexOf(dream);
  switch (action.type) {
    case GOT_DREAMS:
      return action.dreams;
    case ADDED_DREAM:
      return [...state, action.dream];
    case EDITED_DREAM:
      return [...state.slice(0, i), dream, ...state.slice(i + 1)];
    case REMOVED_DREAM:
      return [...state.slice(0, i), ...state.slice(i + 1)];
    default:
      return state;
  }
}
