import {test, expect} from '@playwright/test'

test('Webtable Methods', async ({page}) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php');
    const table = page.locator('//table[@class="table table-striped mt-3"]');

    const rows = await table.locator('tbody>tr').count();
    console.log('No of rows in the given table are : ' + rows);
    const columns = await table.locator('thead>tr>th').count();
    console.log('No of columns in the given table are : ' + columns)

    // Access specific cell data using nth function
    const cell = table.locator('tbody>tr:nth-child(2) td:nth-child(4)'); // 2nd row 4th column
    const cellText = await cell.textContent();
    console.log('Cell text is : ' + cellText);

    // Iterate over rows and columns
   for(let i=1; i<rows; i++){
      for(let j=1; j<columns; j++){
         const cell = await table.locator(`tbody>tr:nth-child(${i}) td:nth-child(${j})`);
         const cellText = await cell.textContent();
         console.log(`Row ${i}, Column ${j}: ${cellText}`);
      }
   }

   // Find a row based on cell value
   const matchedRow = table.locator('tbody > tr', {
      has: table.locator('td', {hasText: "Alden"})
   });
   const rowText = await matchedRow.textContent();
   console.log(`Text found in row : " + ${rowText}`);

   await page.waitForTimeout(3000);
});