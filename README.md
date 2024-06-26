This project aims to guide entry-level repair technicians from repairing simple devices like vacuum cleaners to repairing more complex devices like computers. We want to build a path from "never fixed anything in my life" to "able to fix anything and everything".

This project currently has five major components

1. Admin UI
2. Repair Technicians UI
3. Customers UI
4. Next.js Server
5. Prisma Database

![image](https://github.com/O1SoftwareNetwork/repairs/assets/123757720/a08bdc40-e7b6-466a-904e-8290071b8be8)

## Getting Started

First, install all dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Debugging

#### Debugging with VS Code

Create a file named `.vscode/launch.json` at the root of your project with the following content:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Repair: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Repair: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Repair: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

Now go to the Debug panel (Ctrl+Shift+D on Windows/Linux, ⇧+⌘+D on macOS), select a launch configuration, then press F5 or select Debug: Start Debugging from the Command Palette to start your debugging session.

> Note: For `Repair: debug client-side` configuration you need to run `npm run dev` prio to a launch of this configuration.

## Learn More

To learn more about Repair, take a look at the following resources:

- [Project system design schema](https://lucid.app/lucidchart/eaf7af53-d0dc-4af1-8dbe-56b2f839225a/edit?viewport_loc=-1697%2C-508%2C3345%2C1996%2C0_0&invitationId=inv_809c0783-5a80-448b-895b-2602dcaa7604) - learn about our project's features and structure.

Feel free to [create an issue](https://github.com/O1SoftwareNetwork/repairs/issues/new) in case you see one.

## How to contribute

In order to contribute:

1. [Fork current repository](https://github.com/O1SoftwareNetwork/repairs/fork).
2. Clone your fork with `git clone [your-clone-repo-url]`. In order to get an url you need click on the `<> Code` button, and then copy needed link.
   Be sure that you clone **your fork**, not the original repository.
3. Add `O1SoftwareNetwork/repairs` repo as your remote - `git remote add upstream git@github.com:O1SoftwareNetwork/repairs.git`. After that, you can update your fork with the main repo easily with `git pull upstream`.
4. Create a new feature branch (e.g. `fix/signup` or `add/assignment-page`) - `git checkout -b fix/signup`.
5. After your job is done, commit and push your code into your repo feature branch - `git push origin fix/signup`. Make sure to push only to your forked repo.
6. Create a pull request **from your fork repo** from your feature branch into master branch of [the main project repo](https://github.com/O1SoftwareNetwork/repairs).
