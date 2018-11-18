import React, { Component } from "react";
import { StyleSheet, View, Button, Animated } from "react-native";

export default class App extends Component {
	state = {
		opacity: new Animated.Value(1),
		opacity2: new Animated.Value(0)
	};

	animatedViewTwoHandler = () => {
		Animated.timing(this.state.opacity2, {
			duration: 500,
			toValue: 1,
			useNativeDriver: true
		}).start();
	};

	clickHandler = () => {
		Animated.timing(this.state.opacity, {
			duration: 500,
			toValue: 0,
			useNativeDriver: true
		}).start(() => {
			this.animatedViewTwoHandler();
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<Animated.View
					style={[
						styles.animatedView,
						{
							opacity: this.state.opacity,
							transform: [
								{
									scale: this.state.opacity.interpolate({
										inputRange: [0, 1],
										outputRange: [12, 1]
									})
								}
							]
						}
					]}
				/>
				<Animated.View
					style={[
						styles.animatedViewTwo,
						{
							opacity: this.state.opacity2,
							transform: [
								{
									scale: this.state.opacity2.interpolate({
										inputRange: [0, 1],
										outputRange: [1, 0]
									})
								}
							]
						}
					]}
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
	},
	animatedViewTwo: {
		width: "100%",
		height: "100%",
		backgroundColor: "green",
		position: "absolute"
	}
});
