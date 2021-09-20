import React, {useRef} from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
	item:{
		// padding: 10,
		// height: 44,
		borderBottomColor: "lightsteelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flex: 1,
		flexDirection: "row"
	},
	tab: {
		// width: 68,
		flex: 1,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center"
		// padding: 12,
		// position: "absolute",
		// left: 0
	},
	tabCenter: {
		// width: 272,
		flex: 5,
		padding: 12,
		// position: "absolute",
		// right: 0
	},
	tabText: {
		color: "white",
		fontSize: "2vh",
		whiteSpace: "nowrap"
	},
	tabCenterText: {
		fontSize: "2vh"
	}
})

export const ConcertListItem = ({navigation, item, handleInteraction}) => {
	const widthAnimation = useRef(new Animated.Value(2)).current;
    return (
      <TouchableHighlight onPress={()=> {
		  Animated.timing(
			  widthAnimation,
			  {
				  toValue: 0,
				  duration: 250
			  }
		  ).start(() => {
			  handleInteraction(item);
			  widthAnimation.setValue(2);
		  })
	  }}>
			<View style={styles.item}>
				<Animated.View style={[styles.tab, {flex:widthAnimation}]}>
					<Text style={styles.tabText}>
						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}
					</Text>
				</Animated.View>
				<View style={styles.tabCenter}>
					<Text style={styles.tabCenterText}>
						{item.name}
					</Text>
				</View>
			</View>
		</TouchableHighlight>
    )

}