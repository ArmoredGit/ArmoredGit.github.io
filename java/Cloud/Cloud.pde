import java.util.*;
import wordcram.*;
String [] fileContents ;
String rawText;
String [] tokens;
WordList wList;

void setup() {
  size(400, 200);
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
}

void draw(){
  background(255);
  new WordCram(this)
  .fromWebPage("https://en.wikipedia.org/wiki/Special:Random")
  .withColors(color(30), color(110),
              color(random(255), 240, 200))
  .sizedByWeight(5, 120)
  .withFont("Copse")
  .drawAll();
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
    int lengthRay = myList.size();//temp way of removing junk
    for(int i = lengthRay-1; i > lengthRay-19; i--){
      myList.remove(i);
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
