# Auto-Update Instructions for whokilledthescientists.com

## What to search for
Search the web for recent news about:
- "missing scientists" OR "dead scientists" government classified
- "who killed the scientists"
- Missing/dead researchers connected to NASA JPL, LANL, Wright-Patterson, KCNSC, nuclear labs
- Congressional action on missing scientists (Burlison, Comer, Oversight Committee)
- FBI investigation into missing scientists
- UAP disclosure and connected scientist deaths
- Any of these specific people: Michael Hicks, Frank Maiwald, Monica Reza, Anthony Chavez, Melissa Casias, Steven Garcia, Matthew Sullivan, Amy Eskridge, Nuno Loureiro, Carl Grillmair, Neil McCasland, Jason Thomas, David Wilcock
- New scientists or researchers connected to classified programs who have died or gone missing

## Site structure (index.html)

### 1. Header stats (line ~189-194)
Update the counts if new cases are added:
- Dead count: `<div class="num nd">7</div>`
- Missing count: `<div class="num nm">5</div>`
- "Solved" count: `<div class="num nc">3</div>`
- Agencies probing: `<div class="num np">4+</div>`

### 2. Person cards (inside `<div class="pgrid">`)
Each card follows this template:
```html
<div class="pcard sc-{dead|missing|closed}" tabindex="0" role="button" onclick="showDetail('ID')" onkeydown="if(event.key==='Enter')showDetail('ID')">
  <div class="ppill"><span class="pill pill-{dead|missing|closed}">{DECEASED|MISSING|"CLOSED"}</span></div>
  <div class="pphoto"><img src="images/{id}.jpg" alt="NAME" class="pimg"></div>
  <div class="pbody">
    <div class="pname">NAME</div>
    <div class="prole">ROLE / AFFILIATION</div>
    <div class="pdate">STATUS · DATE</div>
    <div class="psummary">ONE LINE SUMMARY</div>
    <div class="ptags">
      <span class="tag hot">TAG</span>
    </div>
  </div>
</div>
```

### 3. Detail panel data (in `const D={...}` in the script)
Each person has a JS object:
```javascript
id:{
  n:'Full Name',
  r:'Role / affiliation',
  s:'STATUS · Date · Age',
  sc:'dead|missing|closed',
  body:'Detailed narrative paragraph',
  pts:['Key fact 1','Key fact 2',...],
  note:'Investigative analysis note',
  links:[{u:'URL',l:'Link text',s:'Source name'}]
}
```

### 4. Recent Developments section (`<div class="devs">`)
Add new items at the TOP of the list:
```html
<div class="dev {urgent|notable|uap|gov}">
  <div class="dev-date">MON DD, YYYY</div>
  <div class="dev-body">
    <span class="dev-tag {urgent|notable|uap|gov}">TAG</span>
    <strong>Headline</strong>
    <p>Details paragraph with source attribution.</p>
    <a href="URL" target="_blank" rel="noopener">Source name →</a>
  </div>
</div>
```

### 5. Timeline (inside `<div class="timeline">`)
Add entries in chronological order:
```html
<div class="tli">
  <div class="tldot {d|m|c|e}"></div>
  <div class="tldate">Mon YYYY</div>
  <div class="tlbody"><strong>Event headline</strong> — details.</div>
</div>
```
Dot classes: d=death, m=missing, c=closed, e=event

### 6. Node map (in the `nodes` and `edges` arrays in the script)
Add new nodes and edges if new people or connections are discovered.

### 7. Institutions section
Update if new institutional connections emerge.

## Update process
1. Search for news from the last 24 hours
2. Compare findings against existing content
3. If new developments found:
   - Add to Recent Developments (top of list)
   - Update the "Updated" date in the section header
   - If new person: add card, detail data, timeline entry, node map entry
   - If new person: download their photo to images/ folder
   - If status change: update existing card/detail
   - If new connection: add edges to node map
4. Update header tagline case count if needed
5. Git commit with descriptive message and push

## Important guidelines
- Only add verified, sourced information
- Every claim must have a linked source
- Maintain the existing editorial tone: factual, investigative, not conspiratorial
- Use the same CSS classes and HTML patterns as existing content
- Do NOT remove or modify existing content unless correcting a factual error
- Photos should be saved as images/{id}.jpg — crop to portrait orientation if possible
