#!/usr/bin/env node

const { exec } = require('child_process');

const commands = {
    list: () => exec('VBoxManage list vms', (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
    create: (name) => exec(`VBoxManage createvm --name ${name} --register`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
    start: (name) => exec(`VBoxManage startvm ${name}`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
    stop: (name) => exec(`VBoxManage controlvm ${name} acpipowerbutton`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
    delete: (name) => exec(`VBoxManage unregistervm ${name} --delete`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
    info: (name) => exec(`VBoxManage showvminfo ${name}`, (err, stdout, stderr) => {
        if (err) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    }),
};

const command = process.argv[2];
const arg = process.argv[3];

if (commands[command]) {
    commands[command](arg);
} else {
    console.log('Unknown command. Available commands: list, create, start, stop, delete, info');
}