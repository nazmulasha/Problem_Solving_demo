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
            visited[i][j]=0;
    }
    var dir = 'r';
    i=0,j=0;
    while (cnt--) {
        res.push(matrix[i][j]);
        visited[i][j]=true;
        if(dir=='r')
        {
          j++;
          if(j==c || visited[i][j])
          {
              j--,i++;
              dir = 'd';
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
    return res;
};
