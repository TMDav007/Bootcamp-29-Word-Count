const words = sentence =>{
    if (sentence.length == "")
        {
            return "Invalid, input valid words"
        }
    else if(typeof sentence === "number"){
            return "Input must be in strings";
    }
    else if  ( sentence instanceof Array)
            {
                return "Invalid, input valid words"
            }
    else 
        {
            let word = sentence.split(" ");
            // return words;
            let isogram= {};
                for (let i = 0; i<word.length; i++)
                {
                    if(typeof word[i] == "string")
                       {
                        if (!isogram[word[i]])
                            {
                                isogram[word[i]] = 0; 
                            }
                                isogram[word[i]]++;
                        }

                      else  {
                            return "argument must be strings";
                        }
                }
         return isogram;
    }
}

module.exports = words;