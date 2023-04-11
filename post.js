const core = require('@actions/core');
const { spawn } = require('child_process');
const process = require('process');

const run = core.getInput('run', { required: true });
const shell = core.getInput('shell');
const wd = core.getInput('working-directory');

const subprocess = spawn(
    run,
    {
        cwd: wd == '' ? undefined : wd,
        shell: shell == '' ? true : shell,
        stdio: 'inherit'
    }
);

subprocess.on("exit", (exitCode) => {
    process.exitCode = exitCode;
});
