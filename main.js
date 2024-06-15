#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const showPrerequisites = () => {
    const prerequisites = `
    ${chalk.bold('Prerequisites for Performing Hajj:')}
    1. ${chalk.blue('Islam')}: The individual must be a Muslim.
    2. ${chalk.blue('Sanity and Maturity')}: Must be of sound mind and have reached puberty.
    3. ${chalk.blue('Physical and Financial Ability')}: Must be physically and financially capable.
    4. ${chalk.blue('Safety and Security')}: There should be a safe route for travel.
    5. ${chalk.blue('Mahram for Women')}: Women should be accompanied by a Mahram or travel in an organized group.
    6. ${chalk.blue('Completion of Immediate Obligations')}: Settle debts and ensure family is cared for.
    7. ${chalk.blue('Spiritual Preparation')}: Sincere intention, knowledge of rituals, repentance, and reconciliation.
    `;
    console.log(prerequisites);
};
const showProcedure = () => {
    const procedure = `
    ${chalk.bold('Hajj Procedure:')}
    ${chalk.underline('Day 1: 8th Dhul-Hijjah (Yawm at-Tarwiyah)')}
    1. Travel to Mina: Spend the day in prayer and contemplation.
    
    ${chalk.underline('Day 2: 9th Dhul-Hijjah (Yawm Arafah)')}
    2. Travel to Arafat: Stand in prayer from noon until sunset.
    3. Muzdalifah: Collect pebbles and spend the night under the open sky.
    
    ${chalk.underline('Day 3: 10th Dhul-Hijjah (Yawm al-Nahr)')}
    4. Ramy al-Jamarat: Throw seven pebbles at Jamarat al-Aqaba.
    5. Animal Sacrifice (Qurbani): Perform an animal sacrifice.
    6. Shaving/Cutting Hair: Men shave their heads or cut hair; women cut a small portion.
    7. Tawaf al-Ifadah: Perform Tawaf around the Kaaba and Sa'i between Safa and Marwah.
    
    ${chalk.underline('Days 4-6: 11th-13th Dhul-Hijjah (Tashreeq Days)')}
    8. Ramy al-Jamarat: Continue throwing pebbles at the three pillars.
    9. Stay in Mina: Engage in prayer and reflection.
    
    ${chalk.underline('Final Step')}
    10. Farewell Tawaf (Tawaf al-Wada): Perform a final Tawaf around the Kaaba.
    `;
    console.log(procedure);
};
const askForReview = () => {
    inquirer.prompt([
        {
            name: "review",
            type: "input",
            message: "Please leave your review of the Hajj CLI:",
        },
    ])
        .then((answers) => {
        console.log(chalk.green('Thank you for your review!'));
        console.log(chalk.green('Goodbye!'));
    });
};
const mainMenu = () => {
    console.log(chalk.yellow(`
        *********************************
        *                               *
        *      Welcome to Hajj CLI      *
        *                               *
        *********************************
    `));
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What information would you like to see?',
            choices: [
                'Prerequisites for Performing Hajj',
                'Step-by-Step Hajj Procedure',
                'Exit'
            ],
        },
    ])
        .then((answers) => {
        if (answers.option === 'Prerequisites for Performing Hajj') {
            showPrerequisites();
            mainMenu();
        }
        else if (answers.option === 'Step-by-Step Hajj Procedure') {
            showProcedure();
            mainMenu();
        }
        else {
            askForReview();
        }
    });
};
mainMenu();
