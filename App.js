import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import ButtonComponent from "./components/ButtonComponent";
import { randomSelected } from "./constants/QuestionBank";

class App extends Component {

  state = {
    Score: 0,
    index: 0,
    disable: false,
    nextQuestion:false,
    startScreen: true,
    questionScreen:false,
    endScreen:false,
    questionBank:  randomSelected,
      colorA: "grey" ,
      colorB: "grey" ,
      colorC: "grey" ,
 
  };

  displaynextQuestion = () => {
    this.setState({ index: this.state.index + 1,
                    disable: false,
                    nextQuestion:false,
                    colorA:'grey',
                    colorB:'grey',
                    colorC:'grey'});
  };
  
  finish = () => {
    var reshuffled = this.state.questionBank.sort(function(){return .5 - Math.random()});
    var mix =reshuffled.slice(0,5);
    this.setState({
      questionBank:mix,
      start: false,
      Score: 0,
      index: 0,
      disable: false,
      nextQuestion:false,
      colorA:'grey',
      colorB:'grey',
      colorC:'grey'
    });
  };
  


  checkAnswer = (selectedOption, option) => {

    if( this.state.questionBank[this.state.index].answer === selectedOption ){
      if(option === "a"){
      this.setState({colorA: "darkgreen"})
      }
      else if(option === "b"){
       this.setState({colorB: "darkgreen"})
      }
      else if(option === "c"){
       this.setState({colorC: "darkgreen"})
      }
      this.setState({Score: this.state.Score+1,
                     nextQuestion:true
                    
                    })
    
     }
     else{
       if(option === "a"){
         this.setState({colorA: "red"});
         if(this.state.questionBank[this.state.index].answer === 
          this.state.questionBank[this.state.index].options[1] ){
           this.setState({colorB:'darkgreen'})
         }else{
          this.setState({colorC:'darkgreen'})
         }

         
         }
         else if(option === "b"){
          this.setState({colorB: "red"});
          if(this.state.questionBank[this.state.index].answer === 
            this.state.questionBank[this.state.index].options[0] ){
             this.setState({colorA:'darkgreen'})
           }else{
            this.setState({colorC:'darkgreen'})
           }
         }
         else if(option === "c"){
          this.setState({colorC: "red"});
          if(this.state.questionBank[this.state.index].answer === 
            this.state.questionBank[this.state.index].options[0] ){
             this.setState({colorA:'darkgreen'})
           }else{
            this.setState({colorB:'darkgreen'})
           }
         }
         this.setState({
          nextQuestion:true
         
         })

        

     }
    }
    
  
  startscreenController = () => {
    if (this.state.startScreen === true) {
      this.setState({ startScreen: false,
                      questionScreen:true });
    } else {
      this.setState({ startScreen: true });
    }
  };
   
  finishController  =()=>{
    if (this.state.questionScreen === true) {
      this.setState({ startScreen: false,
                      questionScreen:false,
                    endScreen:true });
    } else {
      this.setState({ startScreen: true });
    }
  };

    endController  =()=>{
    if (this.state.endScreen === true) {
      this.setState({ startScreen: true,
                      questionScreen:false,
                      endScreen:false });
       this.finish();               
    } else {
      this.setState({ startScreen: true });
    }
  };


 
  render() {
    const startScreen = (
      <View style={styles.Container}>
      <ImageBackground
      source = {require('./Images/1.jpg')}
      style={styles.image}>
      <View style={styles.startContainer}>
        <Text style={styles.titleText}>
           Quiz App
        </Text>
        <ButtonComponent

         text="Start Quiz" 
         onPress={this.startscreenController} />
      </View>
      </ImageBackground>
      </View>

    );

    const endScreen = (
      (score = this.state.Score),
      <View style={styles.Container}>
        
        <ImageBackground
      source = {require('./Images/2.jpg')}
      style={styles.image}>
      <View style={styles.startContainer}>
        <Text style={styles.titleText}>
           Quiz Score : {this.state.Score}/5
        </Text>
        <ButtonComponent

         text="End Quiz" 
         onPress={this.endController} />
      </View>
     
      
      </ImageBackground>
      
     
      </View>

    );

    const questionsScreen =(
        (indexView = this.state.index + 1),
      (currentQuestion = this.state.questionBank[this.state.index]),
      (score = this.state.Score),
      (btnText = indexView == 5? btnText="Finish":btnText="Next"),
      (pressEvent = indexView !=5? pressEvent=this.displaynextQuestion:pressEvent=this.finishController),
      (
        <View style={styles.questionViewContainer}>
           <ImageBackground
      source = {require('./Images/2.jpg')}
      style={styles.image}>
        <View style={styles.scoreBox}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreTextContainer}>Score : {score}</Text>
            <Text style={styles.scoreTextContainer}>
              Question : {indexView} / 5
            </Text>
          </View>
          </View>

  <View style={styles.questionContainer}>
            <View style={styles.currentQuestionBox}>
            <Text style={styles.questionContainerText}>
              {currentQuestion.question}
            </Text>
            </View>

      <View style={styles.optionBox}>

       <View style = {{...styles.optionContainer,backgroundColor:this.state.colorA}}>
       <TouchableOpacity 
      onPress = {() => 
      this.checkAnswer( this.state.questionBank[this.state.index].options[0] ,  "a" )}> 
        <Text  style={styles.optionContainerText}>
              {this.state.questionBank[this.state.index].options[0]}
          </Text>
        </TouchableOpacity>
       </View>
     
       <View style = {{...styles.optionContainer,backgroundColor:this.state.colorB}}>
        <TouchableOpacity 
      onPress = {() => 
      this.checkAnswer( this.state.questionBank[this.state.index].options[1] ,  "b" )}> 
        <Text  style={styles.optionContainerText}>
              {this.state.questionBank[this.state.index].options[1]}
          </Text>
        </TouchableOpacity>
        </View>

        <View style = {{...styles.optionContainer,backgroundColor:this.state.colorC}}>
       <TouchableOpacity 
      onPress = {() => 
      this.checkAnswer( this.state.questionBank[this.state.index].options[2] ,  "c" )}> 
        <Text  style={styles.optionContainerText}>
              {this.state.questionBank[this.state.index].options[2]}
          </Text>
        </TouchableOpacity>
         </View>
        

        </View>

</View>


          <View style={styles.nextButtonContainer}>
            <ButtonComponent 
              disabled = {this.state.nextQuestion==0}
              text={btnText} 
              start = {"NextFinish"}
              
              onPress={pressEvent} />
          </View>
          </ImageBackground>
        </View>
      ));

    return (
        <View style = {styles.Container}>

        {this.state.startScreen === true ? startScreen:null}
        {this.state.questionScreen === true ? questionsScreen:null}
        {this.state.endScreen === true ? endScreen:null}
        </View>
     
    );
  }
  }


const styles = StyleSheet.create({


  Container: {
    flex: 1,
  },

  endScreen: {
   justifyContent:'center',
  },

  image: {
    flex: 1,
  // justifyContent: "center",
   
  },
 
  startContainer: {
    flex:1,
    alignItems: "center",
    
  },

  titleText: {
    fontSize: 40,
    paddingBottom: 20,
    color: "grey",
    fontWeight:'bold',
    paddingTop:30
  },

  questionViewContainer: {
     flex:1,
   justifyContent:"center",

  },

  scoreBox:{
  marginTop:50,
  marginBottom:50,
  },

  scoreContainer: {

    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    backgroundColor:'crimson',
    paddingTop:10,
    opacity:0.9,
  },
  scoreTextContainer: {
    fontSize: 20,
    paddingBottom: 20,
    color: "white",
    paddingLeft:10,
    paddingRight:10,
  },

  questionContainer: {
    justifyContent:'center',

  },

  currentQuestionBox: {
    justifyContent:'center',
    marginTop:30,
    marginBottom:30,

  },
  questionContainerText: {
    color: "white",
    fontSize: 22,
    textAlign:"center",
    fontWeight:'bold'
  },

  optionBox: {
    justifyContent:'center',
    marginTop:30,
    marginBottom:30,
  },

  optionContainer: {
    justifyContent: "center",
    backgroundColor: "grey",
    alignSelf: "center",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 10,
  },
  optionContainerText: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
     width: "90%",
     textAlign:'center',
  },
 
  nextButtonContainer: {
    alignItems: "flex-end",
  },
  
});

export default App;
