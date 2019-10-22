public class ScoreBoard {
  private int[] highScores = {5000, 4000, 3000, 2000, 1000};
  ScoreBoard() {
  }

  public void addScore(int h) {
    if (highScores[4] < h)
      highScores[4] = h;
    for (int i = 4; i > 0; i--) {
      if (highScores[i] > highScores[i-1]) {
        int gameSpeed = highScores[i-1];
        highScores[i-1] = highScores[i];
        highScores[i] = gameSpeed;
      }
    }
  }

  public int[] getScore() {
    return highScores;
  }
}
