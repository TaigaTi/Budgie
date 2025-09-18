
import { Routes } from '@angular/router';
import { Dashboard } from './shared/pages/dashboard/dashboard';
import { Transactions } from './transactions/transactions';
import { Analytics } from './shared/pages/analytics/analytics';
import { Profile } from './shared/pages/profile/profile';

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: Dashboard },
	{ path: 'transactions', component: Transactions },
	{ path: 'analytics', component: Analytics },
	{ path: 'profile', component: Profile },
	{ path: '**', redirectTo: 'dashboard' }
];
