import * as types from './../../constatns/Booking/ActionTypes.js';

var findIndex = (tasks,id)=>{
	var rs= -1;
	tasks.forEach((task,index)=>{
		if(task.id === id){
			rs = index;
		}
	});
	return rs;
}

// var data= JSON.parse(localStorage.getItem('tasks'));
var initialState= [];

var myReducer = (state= initialState, action) =>{
	var id = '';
	var index= -1;
	switch(action.type){
		case types.FETCH_TASKS:
			state = action.tasks;
			return [...state];
		case types.LIST_ALL:
			return state;
		case types.SAVE_TASK:
			var newTask= {
				id: action.task.id,
				tour: action.task.tour,
				user: action.task.user,
				status: action.task.status,
				cardName: action.task.cardName,
				cardNumber: action.task.cardNumber,
				expirationDate: action.task.expirationDate,
				securityCode: action.task.securityCode,
			};
			if(!newTask.id){
				state.push(newTask);
			}else{
				index= findIndex(state,newTask.id);
				state[index]=newTask;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			id= action.id;
			index= findIndex(state,id);
			state.splice(index,1);	
			return [...state];
		case types.FETCH_TASKS_ID:
			state = action.tasks;
			return [...state];
		default: 
			return state;
	}
};

export default myReducer;