import React, {Component} from 'react';
import './pixDialog.scss'

class PixDialog extends Component {
	constructor(props) {
		super(props);
	}

	changeFlag(){
		this.props.changeFlag();
	}

	render() {
		return (
			<div className="pixDialog">
				{/*Dialog弹窗*/}
				<dialog className="nes-dialog is-rounded" id="dialog-rounded">
					<form method="dialog">
						<p className="title">{this.props.showValue.tips}</p>
						<p>{this.props.showValue.content}</p>
						<menu className="dialog-menu">
							<button className="nes-btn is-primary mr20" onClick={()=>this.changeFlag(false)}>确认</button>
							<button className="nes-btn" onClick={()=>this.changeFlag(false)}>取消</button>
						</menu>
					</form>
				</dialog>
			</div>
		);
	}
}

export default PixDialog;
