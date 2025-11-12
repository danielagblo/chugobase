import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

const Notifications = ({ navigation }: any) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity><Text style={styles.backArrow}>‹</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <View style={styles.notifyCard}>
        <Text style={styles.notificationMsg}>
          Payment of <Text style={styles.bold}>GHC 340</Text> for <Text style={styles.bold}>#1</Text> is reversed back to account ending {"\u2022\u2022\u2022\u2022 7866"}
        </Text>
        <TouchableOpacity style={styles.notifyClose}><Text style={styles.closeIcon}>×</Text></TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        {["Home", "Notification", "checkout", "Orders", "Menu"].map(label => (
          <TouchableOpacity key={label} style={styles.tabItem}>
            <Text style={styles.tabIcon}>⬤</Text>
            <Text style={styles.tabLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {flex:1,backgroundColor:"#F7F8FA"},
  container: {flex:1,padding:14,backgroundColor:"#F7F8FA"},
  headerRow: {flexDirection:"row",alignItems:"center",marginBottom:13,marginTop:10},
  backArrow: {fontSize:32,color:"#101C2A"},
  headerTitle: {flex:1,textAlign:"center",fontSize:16,color:"#949CA6",marginLeft:-32},
  notifyCard: {marginVertical:12,backgroundColor:"#fff",borderRadius:14,padding:10,position:"relative",flexDirection:"row",alignItems:"center"},
  notificationMsg: {fontSize:15,color:"#222B45",flex:1,fontWeight:"400"},
  bold: {fontWeight:"700"},
  notifyClose: {marginLeft:12,},
  closeIcon: {fontSize:16,color:"#222B45",fontWeight:"700"},
  bottomNav: {position:"absolute",bottom:0,left:0,width:"100%",height:65,backgroundColor:"#fff",flexDirection:"row",borderTopWidth:1,borderColor:"#E2E3E4",justifyContent:"space-between",alignItems:"center"},
  tabItem: {flex:1,alignItems:"center",justifyContent:"center"},
  tabIcon: {fontSize:22,color:"#949CA6",marginBottom:1},
  tabLabel: {fontSize:11,color:"#949CA6"},
});
export default Notifications;
