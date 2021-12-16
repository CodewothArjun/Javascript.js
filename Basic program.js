for(i=2;i<100;i++)
  {
    isprime=true;
    for(j=2;j<i;j++)
      {
        
        if(i%j==0)
          {
            isprime=false;
            }
        }
    if(isprime==true)
      {
        console.log(i);
      }
    }

