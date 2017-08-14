var spiralOrder = function(matrix){
    var res=[],r=matrix.length,i,j,c;
    if(r==0)
      return res;
    c = matrix[0].length;
    var cnt = r*c;
    var visited = [];
    for(i=0;i<=r;i++)
        visited[i] = [];
    for(i=0;i<=r;i++)
    {
        for(j=0;j<=c;j++)
            visited[i][j]=0; //every blocks are undiscovered
    }
    var dir = 'r';//direction-left,right,up or down,initially right
    i=0,j=0;
    while (cnt--) {
        res.push(matrix[i][j]);//store the current block
        visited[i][j]=true;//discovered
        if(dir=='r')
        {
          j++;
          if(j==c || visited[i][j])
          {
              j--,i++;
              dir = 'd';//change the direction
          }
        }
        else if(dir == 'd')
        {
            i++;
            if(i==r || visited[i][j])
            {
                i--,j--;
                dir = 'l';
            }
        }
        else if(dir == 'l')
        {
            j--;
            if(j==-1 || visited[i][j])
            {
                i--,j++;
                dir = 'u';
            }
        }
        else {
            i--;
            if(i==0 || visited[i][j])
            {
                i++,j++;
                dir = 'r';
            }
        }
    }
    return res;//res contains the result
};
