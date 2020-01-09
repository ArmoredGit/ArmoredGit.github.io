import java.util.*;
import wordcram.*;
String [] fileContents ;
String rawText;
String [] tokens;
WordList wList;
String [] fileContentsC;
String rawTextC;
String [] tokensC;

void setup() {
  size(1600, 800);
    fileContents = loadStrings("data/common.txt");
    rawTextC = join(fileContents, " ");
    rawTextC = rawTextC.toLowerCase();
    tokensC = rawTextC.split("[^\\w]+");
    println(tokensC.length);
    
    fileContents = loadStrings("data/book.txt");
    rawText = join(fileContents, " ");
    rawText = rawText.toLowerCase();
    tokens=rawText.split("[^\\w]+");
    println(tokens.length);
    wList=new WordList(tokens);
    println(wList.myList.size());
    for(Word x: wList.myList){
      println(x.toString());
    }
    println(wList.myList.size());
    
    noLoop();
}

void draw(){
  //background(255);
  //new WordCram(this)
  //.fromWebPage("http://www.gutenberg.org/files/35/35-0.txt")
  //.withColors(color(30), color(110), color(random(255), 240, 200))
  //.sizedByWeight(5, 120)
  //.withFont("Copse")
  //.drawAll();
}

public class WordList {
  public List<Word> myList;
  public WordList(String[] tokens) {
    myList = new ArrayList<Word>();
    boolean newWord = true;
    for(String s : tokens) {
      newWord = true;
      for(int i = 0; i < myList.size(); i++){
        if(myList.get(i).word.equals(s)){
          myList.get(i).increment();
          newWord = false;
        }
      }
      if(newWord){
        myList.add(new Word(s));
      }
    }
    for(int i = 0; i < myList.size(); i++){
      int j = i;
      while(j > 0 && myList.get(j).ocr < myList.get(j-1).ocr){
        myList.set(j-1,myList.set(j,myList.get(j-1)));
        j--;
      }
    }
    int lengthRay = myList.size();//removing excess 
    for(int i = lengthRay-1; i >= 0; i--){
      boolean j = true;
      for(String x : tokensC){
        if(j){
          if(myList.get(i).word.equals(x)){
            myList.remove(i);
            j = false;
          }
        }
      }
    }
  }
  
}

public class Word{
  String word;
  int ocr;
  Word(String word){
    this.word = word;
    this.ocr = 1;
  }
  
  Word(String word, int ocr){
    this.word = word;
    this.ocr = ocr;
  }
  
  void increment(){
    ocr++;
  }
  
  String toString(){
    return (word + "   " + ocr);
  }
}
