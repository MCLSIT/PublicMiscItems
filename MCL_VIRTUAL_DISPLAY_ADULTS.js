// DISPLAY : This is the new javascript code which will write out the event data

// new variable to handle long event names
var maxNameLength = 100;

// EventKeeper first returns a javascript variable called FeedString 
// which tells us what varibles are returned. 
// characters in the string can be: 
// D : date 
// T : time 
// N : name 
// 1 : keyword 1 
// 2 : keyword 2 

// EventKeeper has created an javascript array variable called evtArray
// with fields = evt_date, evt_time, evt_name, evt_ID, evt_Key1 and evtKey2

// for this example we write out the data from this array in a table.

// inner table with event data
document.write("<table class='table table-hover' cellpadding='0' style='margin-bottom: 5px;' width='100%'><thead><tr><th>Date</th><th>Time</th><th>Title</th><th>Type</th></tr></thead>");

// loop through the array, creating a table row for each row in the array.
for (i=0, c=0; i<evtArray.length, c<=10; i++)
{
  var event_type = evtArray[i][evt_key2];
  if ((event_type == "Adult Program") || (event_type == "Computer Classes"))
  {
  {
    document.write("<tr>");

    // for demonstration purposes, we check FeedString.
    // Since you know what data you've asked for you can hard code the array.
    if (FeedString.indexOf("D") != -1)
        document.write("<td>" + evtArray[i][evt_date] + "</td>");

    if (FeedString.indexOf("P") != -1)
        document.write("<td>" + evtArray[i][evt_date] + "</td>");

    if (FeedString.indexOf("T") != -1)
        document.write("<td style='padding-left:0; padding-right:0;'>" + evtArray[i][evt_time] + "</td>");
    
    if ((FeedString.indexOf("N") != -1) || (FeedString.indexOf("C") != -1))
    {
        {
            // handle long event names
            var theName = evtArray[i][evt_name];
            if (theName.length > maxNameLength)
                theName = theName.substring(0,maxNameLength-2) + '...';
                
            // create the hyperlink based on the Event Name and the Event ID
            
            var linkurl = 'https://www.eventkeeper.com/mars/xpages/m/mcl/ekp.cfm';
            
            linkurl += "#" + evtArray[i][evt_id];
            
			var namelink = '<a href="' + linkurl + '" style="color: #0000EE;" target="_blank" title="';
            namelink += evtArray[i][evt_name] + '">' + theName + '</a>';
            document.write("<td class='LibraryTxtSm'>" + namelink + "</td>");
        }
    }	


    //if (FeedString.indexOf("1") != -1)
    //    document.write("<td>" + evtArray[i][evt_key1] + "</td>");

    if (FeedString.indexOf("2") != -1)
        document.write("<td>" + evtArray[i][evt_key2] + "</td>");

    //if (FeedString.indexOf("U") != -1)
    //    document.write("<td><a href='" + evtArray[i][evt_url] + "' target='_blank'>" +  evtArray[i][evt_urltext] + "</a></td>");

    document.write("</tr>");
    c++;
  }
  }
}
document.write("</table>");