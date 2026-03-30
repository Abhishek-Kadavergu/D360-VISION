'use client'

import { type FC, type FormEvent, useState } from 'react'
import styles from './styles.module.css'

const GetStartedForm: FC = () => {
	const [submitted, setSubmitted] = useState(false)

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<div className={styles.success}>
				<p className={styles.success__title}>Thanks — we received your request.</p>
				<p>
					Our team will reach out shortly. If you need anything urgent, contact
					your PCG representative.
				</p>
			</div>
		)
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<div className={styles.field}>
				<label className={styles.label} htmlFor='fullName'>
					Full name<span className={styles.required} aria-hidden>*</span>
				</label>
				<input
					id='fullName'
					name='fullName'
					className={styles.input}
					type='text'
					autoComplete='name'
					required
					placeholder='Jane Doe'
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor='email'>
					Work email<span className={styles.required} aria-hidden>*</span>
				</label>
				<input
					id='email'
					name='email'
					className={styles.input}
					type='email'
					autoComplete='email'
					required
					placeholder='you@company.com'
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor='company'>
					Company<span className={styles.required} aria-hidden>*</span>
				</label>
				<input
					id='company'
					name='company'
					className={styles.input}
					type='text'
					autoComplete='organization'
					required
					placeholder='Company name'
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor='jobTitle'>
					Job title<span className={styles.required} aria-hidden>*</span>
				</label>
				<input
					id='jobTitle'
					name='jobTitle'
					className={styles.input}
					type='text'
					autoComplete='organization-title'
					required
					placeholder='Director of Data'
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor='phone'>
					Phone<span className={styles.required} aria-hidden>*</span>
				</label>
				<input
					id='phone'
					name='phone'
					className={styles.input}
					type='tel'
					autoComplete='tel'
					required
					placeholder='+1 (555) 000-0000'
				/>
			</div>

			<div className={styles.field}>
				<label className={styles.label} htmlFor='message'>
					What should we know? <span className={styles.required} aria-hidden>*</span>
				</label>
				<textarea
					id='message'
					name='message'
					className={styles.textarea}
					required
					placeholder='Use case, volume, systems, timeline…'
				/>
			</div>

			<button type='submit' className={styles.submit}>
				Submit
			</button>
		</form>
	)
}

export default GetStartedForm
