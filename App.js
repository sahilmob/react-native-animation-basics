import React, { Component } from "react";
import { StyleSheet, View, Button, Animated } from "react-native";

export default class App extends Component {
	state = {
		opacity: new Animated.Value(1)
	};
	clickHandler = () => {
		Animated.timing(this.state.opacity, {
			duration: 500,
			toValue: 0,
			useNativeDriver: true
		}).start();
	};
	render() {
		return (
			<View style={styles.container}>
				<Animated.View
					style={[styles.animatedView, { opacity: this.state.opacity }]}
				/>
				<Button title="Click Me" onPress={this.clickHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	animatedView: {
		width: "50%",
		height: 200,
		backgroundColor: "red",
		marginBottom: 50
	}
});
