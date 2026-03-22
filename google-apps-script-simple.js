function doPost(e) {
  try {
    // Replace with your Google Sheet ID (from the URL when you open your sheet)
    var sheetId = '1t4PPd8SJQAbLRrGcFAKzt6bFZIVNQyySMftmPmg_t2k';
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Get data from the POST request
    var data = JSON.parse(e.postData.contents);

    // Prepare row data
    var rowData = [
      new Date(), // Timestamp
      data.fullName,
      data.email,
      data.phone,
      data.gameId,
      data.tournament,
      data.status || 'pending'
    ];

    // Append to sheet
    sheet.appendRow(rowData);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}