import { yellow, green, cyan } from 'chalk'
import boxen from 'boxen'

const boxenOptions = {
  padding: 1,
  borderColor: 'green',
  borderStyle: 'round'
}
async function log (issue, project) {
  const data = {
    leftpad: '   ',
    doublepad: '    ',
    header: 'Good First Issue in ' + yellow(project) + ': ',
    title: green(issue.title),
    issue: cyan('#' + issue.pr),
    state: green(issue.state),
    unassigned: green('unassigned!'), // All assigned issues are being filtered out at the search level, so all issues will always be unassigned
    link: cyan(issue.url),
    repo: green(issue.url.toString().slice(19, issue.url.toString().indexOf('/issue'))),
    labels: issue.labels
  }

  const output = '\n' + boxen(data.header + '\n\n' + '  - Title: ' + data.title + '\n' + '  - Repository: ' + data.repo + '\n' + '  - Issue: ' + data.issue + '\n' + '  - Status: ' + data.state + '\n' + '  - Assigned to: ' + data.unassigned + '\n\n' + 'Start now: ' + data.link, boxenOptions) + '\n'

  return output
}

export default log
