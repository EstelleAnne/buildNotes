import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom';
import './index.scss';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			show:true,//true的时候显示新建便签
			notes:[],
			tipsValue:'',
		
			
		}
	}
	noteAdd=()=>{
		this.setState({
			show:false
		})	
	}
	valueChange=(e)=>{
		
		let str = e.target.value.trim()
				//if(!str)return;
			
		this.setState({
			tipsValue:str
			
		})
		
	}
	makeSure=()=>{
		
		let str = this.state.tipsValue

		if(!str)return;
		//console.log(!str)
		let tempList = [...this.state.notes];
		

		tempList.push(str)
		
			this.setState({
				show:true,
				notes:tempList,
				tipsValue:''
			})
			
		
	}
	makeCancel=()=>{
		this.setState({
			show:true
		});
	}
	deleteNote=(e)=>{
		
		let notes=[...this.state.notes]
		let index = e.target.id;
		this.setState({
			notes:[
				...notes.slice(0,index),
				...notes.slice(index+1)
			]
		})
		
	}
	renderTipsList(list){
		
		//let deleteStyle= this.state.visible?{display:'block'}:{display:'none'}
		return list.map((note,index)=>{
			return<div   className="item-list" key={index}><div className='list-content'>{note}</div><span className="delete-notes" id={index} onClick={this.deleteNote}>x</span></div>
		})

	}
	render () {
		
		let addnoteStyle = this.state.show?{display:"block"}:{display:"none"};
		let addcontentStyle = this.state.show?{display:"none"}:{display:"block"};
		const list  =this.state.notes
		
		return (
			<div>
				<div className="note-container">
					<div className="title-note">
						<div className="left-note">
							<span>便签</span>
						</div>
					</div>
					<div>
						<div className="note-list">
							<div className="note-add" onClick={this.noteAdd} style={addnoteStyle}>
								<a>+ 新建便签</a>
							</div>
							<div className="note-add-pop" style={addcontentStyle}>
								<div className="note-add-content">
									<textarea value={this.state.tipsValue} onChange = {this.valueChange} id="note-content"></textarea>
								</div>
								<div className="note-foot">
									<a className="note-set-color"></a>
									<div className="note-btn">
										<a onClick={this.makeSure}>确定</a>
										<a onClick={this.makeCancel}>取消</a>
									</div>
								</div>
							</div> 
							{this.renderTipsList(list)}
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = App;