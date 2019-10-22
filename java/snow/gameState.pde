public class gameState {
  private int score = 0;
  private int lines = 0;
  private int level = 1;

  gameState() {
  }

  public void drawState() {
  }

  public int[] getScore() {
    int[] state = {0, 0, 0};
    state[0] = score;
    state[1] = lines;
    state[2] = level;
    return state;
  }

  public void addPoints(int h) {
    score += h;
  }

  public void addLines(int h) {
    lines += h;
    level = 1 + lines/10;
  }

  public void reset() {
    score = 0;
    lines = 0;
    level = 1;
    getScore();
  }
}
