import React, {Component} from 'react';
import ContentCard from "../../components/contentCard/contentCard";
import './itemExprience.scss'
import routerGuard from "../../utils/routerGuard";

class ItemExprience extends Component {
	constructor(props) {
		super(props)
		this.state = {
			itemExprience: [
				{
					itemName: "天高科技有限公司官网",
					itemContent: "因公司的旧官网是早期的样式与内容，且不适应其他的设备端，即打算重新设计并开发成适配所有设备端的一个公司官网，恰好能展示公司的新专注邻域。",
					itemPersonalWork: ["担任唯一的前端开发工程师，与产品经理沟通对接并独立根据提供的设计稿编写出响应式的的公司官网，耐心测试网页与其他设备端的适应问题、bug并一一解决、修复。之后与后台对接，完善官网的数据与后台内容。"]
				},
				{
					itemName: "广州海珠区窗口一体化项目",
					itemContent: "基于广州市海珠区和广州市开发区镇街办事服务大厅开发，为了解决群众提交办事事件时办事大厅窗口人员业务繁忙、" +
						"旧方式办件录入系统操作繁琐、工作量大的问题。目前只需“一步办件”，" +
						"在页面上完成基本信息登记，窗口人员受理并点击办结即可打印文书和给群众进行服务评价。",
					itemPersonalWork: ["根据项目负责人分配的模块进行独立开发，使用ElementUI和Sass完美还原产品与设计给出的设计图原型。", "前期独立开发、封装可复用组件，并兼容其他前端开发的模块中，减少项目整体开发时间预留时间给后期修复bug。后期将多余、重复代码重新二次封装，简化代码量方便后期维护。",
						"独立使用原生JavaScript开发“懒加载”加载接口组件，并整合至项目中，减少页面开始的接口加载数量，优化页面加载速度。", "送测后独立修复走查表所标注的代码bug、样式bug，并根据项目情况优化项目在ie等非主流浏览器加载性能，给产品提供合理的优化方案。"]
				},
				{
					itemName: "广州黄埔开发区政府智能终端",
					itemContent: "项目基于黄埔开发区政府大厅开发，为了解决群众在微信或其他地方预约的办事业务到政府大厅现场排队杂乱，导致工作人员无法按顺序解决或群众到现场不清楚可办理什么事物而开发的一个终端机取号系统。",
					itemPersonalWork: ["担任前端主开发，和另外两位前端同事确定模块，在完成自己的模块开发的基础上，进而帮助另外两位同事解决问题，加快开发进度，在项目截止日之前提前完成项目并送测。", "独立编写、封装可复用模块，减少代码重复，增加代码可读性，方便后期快速定位模块位置并维护。", "后期整合、review代码，修复bug，和产品、后端对接确保项目无误准确，打包发送现场实施，不断跟进并解决现场bug问题。"]
				},
			]
		}
	}

	componentDidMount() {
		//路由守卫
		// routerGuard(this.props);
	}

	render() {
		return (
			<div className="itemExprience">
				<div className="itemExprience__content">
					<ContentCard>
						<div>
							{"项目经验"}
							{
								<ul>
									{
										this.state.itemExprience.map((item, index) => {
											return (
												<li key={index}>
													【{item.itemName}】
													<ul>
														<li>
															<div className="itemName">项目内容：</div>
															{item.itemContent}
														</li>
														<li>个人工作:
															<ul>
																{item.itemPersonalWork.map((item2, index2) => {
																	return (
																		<li key={index2}>{item2}</li>
																	)
																})}
															</ul>
														</li>
													</ul>
												</li>
											)
										})
									}
								</ul>
							}
						</div>
					</ContentCard>
				</div>
			</div>
		);
	}
}

export default ItemExprience;
