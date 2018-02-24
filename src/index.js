module.exports = function getZerosCount(number, base) {
  var a=0;
  var m;
var del;
for(var i=2;i<=base;i++)
{
	if(base%i==0)
		{
        del=0;
        for(var k=2;k<=i;k++)
        	{
        if(i%k==0){del++;}
        	}
        if(del==1)
        	{
        m=i;
        	}
		}
}

     while (number >= m)
     {
       number = Math.floor(number/m);
       a = a + number;
     }
         if(base>(m*m)&&base%(m*m)==0)
    {
    a=a/2;
    }
    if(base>(m*m)&&base%(m*m*m)==0)
    {
    a=a/1.5;
    }
 return (Math.floor(a));// your implementation
}
